import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trash2, Upload, Edit2, Eye } from "lucide-react";
import { storagePut } from "@/lib/storage";
import { trpc } from "@/lib/trpc";
import { useToast } from "@/hooks/use-toast";

const USAGE_OPTIONS = [
  { value: "hero", label: "Hero Section (Home)" },
  { value: "location-easton", label: "Location - Easton" },
  { value: "location-dublin", label: "Location - Dublin" },
  { value: "location-ua", label: "Location - Upper Arlington" },
  { value: "service", label: "Service Page" },
  { value: "blog", label: "Blog Post" },
  { value: "problem-state", label: "Problem State Page" },
];

export default function ImageManager() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [altText, setAltText] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const { data: images = [], isLoading, refetch } = trpc.images.list.useQuery();
  const uploadMutation = trpc.images.upload.useMutation();
  const deleteMutation = trpc.images.delete.useMutation();
  const updateUsageMutation = trpc.images.updateUsage.useMutation();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Maximum file size is 10MB",
          variant: "destructive",
        });
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);
    try {
      const buffer = await selectedFile.arrayBuffer();
      const { key, url } = await storagePut(
        `images/${Date.now()}-${selectedFile.name}`,
        new Uint8Array(buffer),
        selectedFile.type
      );

      await uploadMutation.mutateAsync({
        filename: selectedFile.name,
        url,
        s3Key: key,
        mimeType: selectedFile.type,
        fileSize: selectedFile.size,
        altText: altText || undefined,
      });

      toast({
        title: "Success",
        description: "Image uploaded successfully",
      });

      setSelectedFile(null);
      setAltText("");
      if (fileInputRef.current) fileInputRef.current.value = "";
      refetch();
    } catch (error) {
      console.error("Upload error:", error);
      toast({
        title: "Upload failed",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this image?")) return;

    try {
      await deleteMutation.mutateAsync(id);
      toast({
        title: "Success",
        description: "Image deleted successfully",
      });
      refetch();
    } catch (error) {
      toast({
        title: "Delete failed",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
      });
    }
  };

  const handleUpdateUsage = async (id: number, usage: string, usageId?: string) => {
    try {
      await updateUsageMutation.mutateAsync({
        id,
        usage: usage || undefined,
        usageId: usageId || undefined,
      });
      toast({
        title: "Success",
        description: "Image assignment updated",
      });
      refetch();
    } catch (error) {
      toast({
        title: "Update failed",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Upload Section */}
      <Card className="border-none shadow-md">
        <CardHeader className="bg-primary/10">
          <CardTitle className="flex items-center gap-2">
            <Upload className="w-5 h-5" />
            Upload New Image
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="file-input">Select Image</Label>
            <div className="flex gap-2">
              <Input
                id="file-input"
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                disabled={uploading}
              />
              <Button
                onClick={() => fileInputRef.current?.click()}
                variant="outline"
                disabled={uploading}
              >
                Browse
              </Button>
            </div>
            {selectedFile && (
              <p className="text-sm text-muted-foreground">
                Selected: {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)}MB)
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="alt-text">Alt Text (Optional)</Label>
            <Input
              id="alt-text"
              placeholder="Describe the image for accessibility"
              value={altText}
              onChange={(e) => setAltText(e.target.value)}
              disabled={uploading}
            />
          </div>

          <Button
            onClick={handleUpload}
            disabled={!selectedFile || uploading}
            className="w-full"
          >
            {uploading ? "Uploading..." : "Upload Image"}
          </Button>
        </CardContent>
      </Card>

      {/* Image Gallery */}
      <Card className="border-none shadow-md">
        <CardHeader className="bg-primary/10">
          <CardTitle>Image Gallery ({images.length})</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          {isLoading ? (
            <p className="text-center text-muted-foreground">Loading images...</p>
          ) : images.length === 0 ? (
            <p className="text-center text-muted-foreground">No images uploaded yet</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((image) => (
                <ImageCard
                  key={image.id}
                  image={image}
                  onDelete={handleDelete}
                  onUpdateUsage={handleUpdateUsage}
                />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function ImageCard({ image, onDelete, onUpdateUsage }: {
  image: any;
  onDelete: (id: number) => void;
  onUpdateUsage: (id: number, usage: string, usageId?: string) => void;
}) {
  const [selectedUsage, setSelectedUsage] = useState(image.usage || "");
  const [selectedUsageId, setSelectedUsageId] = useState(image.usageId || "");
  const [isEditing, setIsEditing] = useState(false);

  const usageLabel = USAGE_OPTIONS.find(o => o.value === image.usage)?.label || "Unassigned";

  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
      <div className="relative aspect-video bg-muted overflow-hidden group">
        <img
          src={image.url}
          alt={image.altText || image.filename}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" variant="secondary">
                <Eye className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <img src={image.url} alt={image.altText || image.filename} className="w-full" />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <CardContent className="pt-4 space-y-3">
        <div>
          <p className="text-sm font-medium truncate">{image.filename}</p>
          <p className="text-xs text-muted-foreground">{(image.fileSize / 1024).toFixed(0)}KB</p>
        </div>

        <div>
          <p className="text-xs text-muted-foreground mb-1">Current Usage</p>
          <Badge variant="outline">{usageLabel}</Badge>
        </div>

        {isEditing ? (
          <div className="space-y-2">
            <Select value={selectedUsage} onValueChange={setSelectedUsage}>
              <SelectTrigger className="h-8 text-xs">
                <SelectValue placeholder="Select usage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Unassigned</SelectItem>
                {USAGE_OPTIONS.map(opt => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Input
              placeholder="Usage ID (optional)"
              value={selectedUsageId}
              onChange={(e) => setSelectedUsageId(e.target.value)}
              className="h-8 text-xs"
            />

            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={() => {
                  onUpdateUsage(image.id, selectedUsage, selectedUsageId || undefined);
                  setIsEditing(false);
                }}
                className="flex-1 h-8 text-xs"
              >
                Save
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setIsEditing(false)}
                className="flex-1 h-8 text-xs"
              >
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setIsEditing(true)}
              className="flex-1 h-8 text-xs"
            >
              <Edit2 className="w-3 h-3 mr-1" />
              Assign
            </Button>
            <Button
              size="sm"
              variant="destructive"
              onClick={() => onDelete(image.id)}
              className="flex-1 h-8 text-xs"
            >
              <Trash2 className="w-3 h-3 mr-1" />
              Delete
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
