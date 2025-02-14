"use client";

import { useTranslation } from "react-i18next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import Footer from "../components/Footer";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-['Monument_Extended'] text-3xl md:text-4xl font-extrabold text-primary">
                Get In Touch
              </h1>
              <p className="font-['SF_Pro_Display'] text-lg text-muted-foreground max-w-lg">
                Let us bring a touch of elegance to your home or business with
                our precision and attention to detail. Contact us for a free
                consultation and estimates, and we stand behind our work with a
                comprehensive warranty.
              </p>
            </div>

            {/* Business Hours */}
            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <h2 className="font-['Monument_Extended'] text-xl">
                  Business Hours
                </h2>
              </div>
              <div className="space-y-2 pl-8">
                <p className="font-medium">Office Hours: 9AM-5PM</p>
                <p className="font-medium">Working Days: Monday-Saturday</p>
              </div>
            </Card>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-1 text-primary" />
                <div>
                  <h3 className="font-['Monument_Extended'] text-lg font-bold">
                    Phone
                  </h3>
                  <p className="text-lg">+95 95016422</p>
                  <p className="text-lg">+95 95142000</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-primary" />
                <div>
                  <h3 className="font-['Monument_Extended'] text-lg font-bold">
                    Address
                  </h3>
                  <p className="text-lg">
                    2, Waizayandar Rd., Thingankyun Tsp., Yangon
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[450px] w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.0792224596426!2d96.17922377432464!3d16.822425483971614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1933d001b512b%3A0xe17362b4c26a11e!2sSuper%20Select!5e0!3m2!1smy!2smm!4v1681960397315!5m2!1smy!2smm"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
}
