"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import ProductCardFive from '@/components/sections/product/ProductCardFive';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import ContactText from '@/components/sections/contact/ContactText';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="smallSizeLargeTitles"
      background="grid"
      cardStyle="shadow-colored"
      primaryButtonStyle="flat"
      secondaryButtonStyle="layered"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="FoodBad"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Locations", id: "locations" }
          ]}
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="FoodBad"
          description="Experience authentic pizza crafted with passion. Premium ingredients, traditional recipes, and unbeatable flavor. Order your favorite pizza today."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35eNGemlCEhFf8xGC6iUDmHzPTI/uploaded-1766060003084-teyn4e0p.jpg"
          imageAlt="Delicious FoodBad pizza"
          frameStyle="card"
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardFive
          title="Our Pizza Menu"
          description="Choose from our selection of delicious pizzas made fresh to order"
          tag="Bestsellers"
          products={[
            {
              id: "1",
              button: { text: "Add to Order", href: "contact" },
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35eNGemlCEhFf8xGC6iUDmHzPTI/uploaded-1766060004839-j5k9es7y.jpg",
              imageAlt: "Margherita pizza"
            },
            {
              id: "2",
              button: { text: "Add to Order", href: "contact" },
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35eNGemlCEhFf8xGC6iUDmHzPTI/uploaded-1766060006492-bvilq250.jpg",
              imageAlt: "Pepperoni pizza"
            },
            {
              id: "3",
              button: { text: "Add to Order", href: "contact" },
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35eNGemlCEhFf8xGC6iUDmHzPTI/uploaded-1766060008093-r41civ12.jpg",
              imageAlt: "Vegetarian pizza"
            },
            {
              id: "4",
              button: { text: "Add to Order", href: "contact" },
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35eNGemlCEhFf8xGC6iUDmHzPTI/uploaded-1766060009636-utkfcjg3.jpg",
              imageAlt: "Special pizza"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="about" data-section="about">
        <FeatureCardTwentyOne
          title="About FoodBad"
          description="Discover what makes FoodBad the best pizza destination in town. We are committed to quality, taste, and customer satisfaction."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35eNGemlCEhFf8xGC6iUDmHzPTI/uploaded-1766060011405-g3sjs5uv.jpg"
          imageAlt="FoodBad restaurant interior"
          accordionItems={[
            {
              id: "1",
              title: "Premium Quality",
              content: "We use only the finest ingredients sourced from trusted suppliers. Every pizza is made fresh to order with authentic Italian recipes."
            },
            {
              id: "2",
              title: "Expert Chefs",
              content: "Our team of experienced pizza chefs brings years of culinary expertise. They craft each pizza with precision and passion."
            },
            {
              id: "3",
              title: "Fast Delivery",
              content: "Order now and enjoy hot, fresh pizza delivered to your door. We guarantee prompt service and quality packaging."
            }
          ]}
          useInvertedBackground="noInvert"
          mediaPosition="left"
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="Customer Love"
          description="See what our happy customers have to say about FoodBad pizza"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Food Enthusiast",
              testimonial: "The best pizza I have ever tasted! Fresh ingredients, perfect texture, and amazing flavor. Highly recommend FoodBad!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35eNGemlCEhFf8xGC6iUDmHzPTI/uploaded-1766060018001-q1wr665u.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Regular Customer",
              testimonial: "Consistently excellent quality and fast delivery. FoodBad has become my go-to pizza place. Never disappoints!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35eNGemlCEhFf8xGC6iUDmHzPTI/uploaded-1766060019816-7y033k5p.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Food Blogger",
              testimonial: "Outstanding pizza with premium toppings. The customer service is exceptional. This is where pizza perfection lives.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35eNGemlCEhFf8xGC6iUDmHzPTI/uploaded-1766060021353-96embbeo.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Event Organizer",
              testimonial: "We order from FoodBad for all our events. The team is professional, the pizza is delicious, and prices are fair.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35eNGemlCEhFf8xGC6iUDmHzPTI/uploaded-1766060022950-cv0r1cmt.jpg",
              imageAlt: "David Kim"
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="locations" data-section="locations">
        <TeamCardTwo
          title="Our Locations"
          description="Visit FoodBad at any of our convenient locations"
          members={[
            {
              id: "1",
              name: "Downtown Branch",
              role: "Main Location",
              description: "Open daily 11am - 10pm. 123 Main Street, City Center. For reservations call 48388383838",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35eNGemlCEhFf8xGC6iUDmHzPTI/uploaded-1766060014983-210hqkw7.jpg",
              imageAlt: "Downtown FoodBad location"
            },
            {
              id: "2",
              name: "Westside Branch",
              role: "Secondary Location",
              description: "Open daily 12pm - 11pm. 456 West Avenue, Shopping District. Call for orders: 48388383838",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35eNGemlCEhFf8xGC6iUDmHzPTI/uploaded-1766060016272-pjni1f4f.jpg",
              imageAlt: "Westside FoodBad location"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to satisfy your pizza cravings? Call us at 48388383838 or fill out the form below to place your order. We are here to serve you!"
          animationType="entrance-slide"
          buttons={[
            { text: "Call Now", href: "tel:48388383838" },
            { text: "Send Message", href: "#" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="FoodBad"
          copyrightText="© 2025 FoodBad Pizza. All rights reserved."
          columns={[
            {
              title: "Menu",
              items: [
                { label: "Our Pizzas", href: "menu" },
                { label: "Special Offers", href: "menu" },
                { label: "Sides & Drinks", href: "menu" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Locations", href: "locations" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Phone: 48388383838", href: "tel:48388383838" },
                { label: "Email: info@foodbad.com", href: "mailto:info@foodbad.com" },
                { label: "Hours: 11am - 11pm", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
