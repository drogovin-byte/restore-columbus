import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
}

interface GoogleReviewsProps {
  locationName: string;
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
}

export default function GoogleReviews({ 
  locationName, 
  reviews, 
  averageRating, 
  totalReviews 
}: GoogleReviewsProps) {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Columbus Residents</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.round(averageRating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="font-bold text-lg">{averageRating.toFixed(1)}</span>
              <span className="text-muted-foreground">({totalReviews} reviews)</span>
            </div>
            <a 
              href={`https://www.google.com/search?q=${encodeURIComponent(locationName + ' Restore Hyper Wellness')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium text-sm"
            >
              View on Google →
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.filter(review => review.rating === 5).map((review, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-bold text-foreground">{review.author}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-foreground/80 line-clamp-4">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4">
            Share your experience and help others discover the benefits of Restore
          </p>
          <a 
            href={`https://www.google.com/search?q=${encodeURIComponent(locationName + ' Restore Hyper Wellness')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Leave a Review on Google
          </a>
        </div>
      </div>
    </section>
  );
}
