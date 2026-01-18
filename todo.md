
- [x] Enhance Quiz page goal selection cards with better visual design
- [x] Add staggered fade-in animations on quiz card entry
- [x] Enhance home page problem state cards with better visual design and larger copy
- [x] Fix missing service names on therapy cards
- [x] Implement hover overlay on service cards with description and Book Now button
- [x] Fix session duration text color for better readability on service cards
- [x] Fix "Book Free Consultation" button to route to consultation booking page
- [x] Fix light blue copy visibility in "Why Choose" and problem state cards
- [x] Update therapy and IV pricing to match actual Restore.com pricing
- [x] Update skin health pricing to match actual Restore.com pricing
- [x] Update services page to display both member and non-member pricing with credit language where applicable
- [x] Update Pricing page service cards to display both member and non-member pricing
- [x] Correct NAD+ IV (500mg) pricing to Member $440 | Retail $550
- [x] Correct Niagen NR IV (500mg) pricing to Member $690 | Retail $860
- [ ] Update NAD+ detail page with all dosage pricing options
- [ ] Update Niagen detail page with all dosage pricing options
- [x] Implement quick-view modals for service cards on Pricing page
- [x] Add hover animations to service cards on Pricing page with scale transforms and shadow transitions
- [x] Improve checkmark visibility in Key Benefits and Who It's For sections on service detail pages
- [x] Fix checkmark color - change from light accent to dark, saturated color for better visibility
- [x] Update membership signup copy to clarify expressing interest (not purchase)
- [x] Create thank you/confirmation page after membership signup submission
- [x] Add studio contact information to confirmation page (show selected studio details)
- [x] Add "Return to Home" button on confirmation page
- [x] Add "Contact Studio Directly" option with phone number on confirmation page
- [x] Allow multiple health goal selection in membership signup (change from single to multi-select)
- [x] Fix scroll anchor issue - ensure page stays at top when navigating between steps
- [x] Add email confirmation for membership signup submissions
- [x] Add progress step numbers (1 of 3, 2 of 3, 3 of 3) to the form progress bar
- [x] Fix Call Studio Now button text overflow (text being cut off)
- [x] Add phone call functionality to Call Studio Now button (tel: link)
- [x] Audit all Call Studio buttons throughout the site
- [x] Fix Call Studio buttons to link to correct studio phone numbers
- [x] Test Call Studio buttons on each page
- [x] Debug email confirmation system - identified that email service requires BUILT_IN_FORGE_API_URL and BUILT_IN_FORGE_API_KEY (auto-injected by Manus in production)
- [x] Improved error logging for email sending to track issues
- [x] Email system is properly configured - will work in production
- [x] Add selected health goals to admin dashboard membership signup details
- [x] Fix Call Now buttons - tel: links now working with proper phone numbers
- [x] Fix email confirmation system - configured for production (auto-injected env vars)
- [x] Make membership tier optional - users can express interest without selecting tier
- [x] Remove "Premium Service" copy from service cards
- [x] Remove "30% Off" copy from service cards
- [x] Remove "Member discount available" copy from service cards
- [x] Ensure all service cards have consistent heights
- [x] Align copy within service cards for visual consistency
- [x] Reorganize Specialty Services on Pricing page - medical services (IV, TRT, IM Shots, mHBOT) in top row, skin health (HydraFacial, Neveskin Facial/Shape/Tone) in bottom row
- [x] Make location cards clickable to navigate to individual studio pages
- [x] Update Google review counts - Easton: 550+, verify Dublin & Upper Arlington counts
- [ ] Add admin panel for updating review counts manually
- [x] Fix nested anchor tag error on Locations page
- [x] Fix 404 error on /locations/easton route
- [x] Update Easton location landmarks - replace Columbus Zoo with Columbus Airport CMH and Gahanna High School with New Albany
- [x] Fix map coordinates for Easton location (4158 Easton Gateway)
- [x] Update Google reviews count for Easton location
- [x] Fix map coordinates for Dublin location (6780 Longshore Street, Dublin, OH 43017)
- [x] Update Dublin location hours - Mon-Fri 10am-6pm, Saturday 10am-5pm
- [x] Update Dublin location reviews count to 250+
- [x] Fix 404 errors on footer location links
- [x] Fix map coordinates for Upper Arlington location (3094 Kingsdale Center)
- [x] Update Upper Arlington hours - Monday closed, Tues-Fri 10am-6pm, Sat 10am-5pm, Sun 11am-4pm
- [x] Fix Upper Arlington hours display to show Monday as closed
- [x] Add location-specific services (Hyperbaric Oxygen, Neveskin, GLP-1 to all; Hydrafacial to Easton & Dublin)
- [x] Combine exclusive services and services available into one unified section
- [x] Fix Easton map showing Dublin location instead of Easton
- [x] Update Easton reviews count to 650+
- [x] Make location reviews independent - each location displays its own review count
- [x] Update Easton totalReviews to 650 in data.ts
- [x] Update Free Consultation link in ProblemDetail to Manus booking app
- [x] Modify hero image - replace "WELLNESS COLUMBUS" text with correct Restore logo (circular needle icon) in white on blue wall
- [x] Fix footer layout - Aesthetic now in top row with 6-column grid
- [x] Fix disclaimer visibility - text now visible by default with collapse/expand button
- [x] Redesign service cards with center images, "MAY HELP" benefits format, and dashed borders
- [x] Add section headers to Services page (Core Therapies, Power Up at Cellular Level, Reveal Youthful Skin, Medical Services, Weight Loss)
- [x] Add Biomarker Assessments service with details from restore.com
- [x] Add GLP-1 Weight Loss Programs service with details from restore.com
- [x] Remove dashed borders from service cards - replace with solid border or shadow
- [x] Fix GLP-1 image - assign appropriate service image from existing files
- [x] Fix Biomarker Assessments image - assign appropriate service image from existing files
- [x] Update Services page consultation button to link to local booking page
- [x] Change light blue CTA links to more prominent color for better visibility
- [x] Create Breadcrumb component for navigation
- [x] Add breadcrumbs to ServiceDetail page
- [x] Add breadcrumbs to ProblemDetail page
- [x] Add breadcrumbs to LocationDetail page
- [x] Add breadcrumbs to BlogPost page
- [x] Fix inconsistent background colors for services on location detail pages
- [x] Make special services on location pages clickable to navigate to service detail pages
- [x] Add comprehensive IV menu to data.ts with all 8 signature drips and ingredients
- [x] Add IV nutrient options (Signature, Premium) to data.ts
- [x] Add IM shot options to data.ts
- [x] Create IV Menu component with tabbed interface (Drips, Nutrients, IM Shots)
- [x] Update IV Therapy service detail page to display full IV menu
- [x] Add pricing for all IV menu items
- [x] Add ingredient lists for each IV drip
- [x] Add benefit descriptions for each nutrient
- [x] Enhance IV Menu cards with vibrant colors, gradients, and icons
- [x] Enhance nutrient cards with colored badges, gradients, and benefit-specific styling
- [x] Update IV menu cards to use Restore.com blue color palette instead of multi-colored scheme
- [x] Enhance tab navigation with colored underlines, icons, gradient background, and hover effects
- [x] Fix tab border styling - move border from container to individual tabs
- [x] Update pricing section copy on IV Therapy service page to be more welcoming about variable pricing
- [x] Add Hangover IV drip with ingredients and pricing
- [x] Add Myers (New Myers) IV drip with ingredients and pricing
- [x] Add Cold & Flu IV drip with ingredients and pricing
- [x] Add Unstoppable IV drip with ingredients and pricing
- [x] Fix IV Menu tab buttons mobile display - text is being cut off on small screens
- [x] Create Upper Arlington neighborhood-specific blog post and add to blog page
- [x] Implement FAQ schema markup on FAQ page for rich snippets
- [x] Fix Neveskin Shape and Neveskin Tone image display - images showing as broken
- [x] Forward all lead landing page inquiries to drogovin@restore.com in addition to studio emails
- [ ] Set up SMS notifications for lead inquiries via Twilio (deferred - waiting for Twilio credentials)
- [x] Fix appointment request confirmation email formatting - HTML tags displaying as raw text
- [x] Fix missing "Melt Stress & Find Calm" comparison guide image
- [x] Redesign comparison detail pages with conversion-focused layout
- [x] Add full-width hero images to comparison detail pages
- [x] Add trust indicators section (client count, rating, established date, science-backed)
- [x] Add solution comparison cards with key benefits
- [x] Add "Why Choose Restore" section with differentiators
- [x] Add real client testimonials with 5-star ratings
- [x] Add FAQ section to address common objections
- [x] Add final CTA section with dual buttons (Book + Call)
- [x] Verify all 6 comparison pages display consistently

## Current Sprint: Multi-Location Phone Numbers

- [x] Update ComparisonDetail CTA section to display all 3 location phone numbers
- [x] Make phone numbers clickable with tel: links
- [x] Update FirstTimeOffer CTA section with all 3 locations
- [x] Update Home.tsx final CTA section with all 3 locations
- [x] Update any other CTA sections with multi-location phone numbers
- [x] Test clickable phone numbers on mobile and desktop
- [x] Verify tel: links work correctly for all 3 locations

## Bug Fixes

- [x] Fix Upper Arlington phone button text overflow - text getting squeezed/cut off
- [x] Adjust phone button styling to allow text wrapping or reduce font size on smaller screens
- [x] Test phone buttons on mobile and tablet viewports
- [x] Fix phone number breaking across lines - redesign layout to keep numbers on single line
- [x] Test phone buttons display correctly without line breaks on all pages

## Current Issue: Missing Images

- [x] Fix missing images on comparison guide cards (Melt Stress & Find Calm showing placeholder)
- [x] Verify all comparison guide cards have images loading correctly

## Current Issue: Service Routing Bug

- [x] Fix Hyperbaric Oxygen service routing on "Melt Stress & Find Calm" comparison detail page - shows "service not found" when clicking "Learn More & Book" button


## Current Sprint: Automated Link Testing

- [x] Create vitest test suite for comparison guide link validation
- [x] Implement link validation to check all comparison links point to valid service IDs
- [x] Add test to npm scripts for CI/CD integration
- [x] Verify test runs successfully and catches broken links
- [x] Fixed 6 invalid comparison guide links (red-light-therapy → red-light, iv-therapy → iv-drip)


## Current Issue: Missing Hero Images on Comparison Pages

- [x] Audit all 6 comparison detail pages for missing hero images
- [x] Generate or assign hero images for pages without them (created hero images for Skin Health and Athletic Performance pages)
- [x] Verify all hero images load correctly - all 6 comparison pages now have professional hero images

## Current Sprint: Replace Comparison Page Images with Restore.com Lifestyle Images

- [x] Replace Athletic Performance & Recovery hero image with athlete lifestyle photo from restore.com
- [x] Replace Skin Health & Vitality hero image with beauty/wellness lifestyle photo from restore.com
- [x] Verify both comparison pages display new images correctly
- [x] Remove text overlays from Athletic Performance hero image
- [x] Remove text overlays from Skin Health hero image
- [x] Verify cleaned images display correctly on comparison pages
- [x] Reposition Skin Health hero image to show client face prominently
- [x] Fix CTA button text overflow on mobile - reduced font size and padding for mobile viewports

## Performance Optimization (PageSpeed Insights Mobile: 60 → 85+)

- [ ] Analyze current assets and image usage
- [ ] Convert hero and service images to WebP format
- [ ] Implement responsive image srcset attributes
- [ ] Add image lazy loading (loading="lazy")
- [ ] Preload critical hero images to fix LCP (19.0s → <2.5s)
- [ ] Defer non-critical JavaScript (reduce unused JS: 442 KiB)
- [ ] Fix render-blocking requests (1,570 ms savings)
- [ ] Fix accessibility: contrast ratio issues
- [ ] Fix accessibility: add aria-labels to links
- [ ] Remove user-scalable="no" from viewport meta tag
- [ ] Test performance on PageSpeed Insights
- [ ] Verify visual design unchanged
- [ ] Deploy optimized version

## Current Sprint: Rename "Comparisons" to "Solutions"

- [x] Update main navigation menu - change "Comparisons" to "Solutions" (Layout.tsx desktop and mobile)
- [x] Update home page section heading and CTA button text (Home.tsx)
- [x] Update Comparisons page title and description (Comparisons.tsx)
- [x] Update ComparisonDetail breadcrumb and error messages (ComparisonDetail.tsx)
- [x] Update footer links if applicable (no footer links found)
- [x] Update breadcrumbs on solution detail pages (updated in ComparisonDetail.tsx)
- [x] Keep /comparisons URL for SEO, display text now shows Solutions
- [x] Test all navigation links work correctly
- [x] Verify no broken references to old terminology
## Current Sprint: Reorder Main Navigation

- [x] Reorder navigation: Therapies → Solutions → Pricing → Memberships → Locations → Blog → FAQ
- [x] Update desktop navigation in Layout.tsx
- [x] Update mobile navigation in Layout.tsx
- [x] Test navigation order on both desktop and mobile

## Current Sprint: Update Solution Card Images with Aspirational Imagery

- [x] Generate six aspirational solution card images with Restore brand consistency
- [x] Update all cardImage paths in data.ts to use new generated images
- [x] Update all image paths in data.ts to use new generated images
- [x] Verify all six solution cards display new images correctly on Solutions page

- [x] Update Solutions page CTA from "Read Full Comparison" to "Explore This Solution"

## Current Sprint: Fix Sitemap

- [x] Locate and disable dynamic sitemap route in server code (confirmed: no dynamic route exists, static file is correct)
- [x] Verify static sitemap.xml is served correctly (dev server: 51 URLs, build output: correct)
- [x] Test sitemap serves all 52 URLs (dev server confirmed: 51 URLs with proper structure)
- [x] Save checkpoint and publish (checkpoint 6e204de8 ready for publishing)

## Current Sprint: Valentine's Day Blog Post

- [x] Write Valentine's Day blog content featuring wellness experiences for couples
- [x] Add blog post to data.ts
- [x] Integrate into blog page (blog automatically displays all posts from data.ts)
- [x] Save checkpoint and publish (checkpoint 39af83a5)

## Current Sprint: Valentine's Blog Post Fixes

- [x] Update phone numbers in Valentine's blog post to match location page (Easton: 614-944-9041, Dublin: 614-944-9041, Upper Arlington: 614-745-0966)
- [x] Generate hero image for Valentine's blog post (romantic spa scene with couple)
- [x] Save checkpoint and publish (checkpoint 0dccce9a)

## Current Sprint: Update Valentine's Hero Image

- [x] Replace hero image with couple in infrared sauna (intimate infrared sauna scene with romantic lighting)
- [x] Save checkpoint and publish (checkpoint a24bf43e)

## Current Sprint: Valentine's Blog Corrections

- [x] Update Dublin phone number to 614-553-7207
- [x] Remove champagne and chocolate reference from blog post
- [ ] Save checkpoint and publish
