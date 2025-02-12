"use client";
import React, { useState } from "react";
import { ArrowUpRight, Phone, Building2, Factory } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const About = () => {
  const route = useRouter();

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <div className=" pt-20 pb-10 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image Section with Decorative Elements */}
            <div
              className="w-full lg:w-[800px] lg:h-[250px] relative group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl transform -rotate-2 transition-transform group-hover:rotate-0" />
              <div className="relative grid grid-cols-2 gap-4">
                {/* First Image */}
                <div className="relative overflow-hidden rounded-xl col-span-2 md:col-span-1">
                  <Image
                    src="My life (2).jpg"
                    alt="Super Select Showcase 1"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover aspect-[4/3] transform transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Second Image */}
                <div className="relative overflow-hidden rounded-xl col-span-2 md:col-span-1">
                  <Image
                    width={100}
                    height={100}
                    src="IMG_0343.JPG"
                    alt="Super Select Showcase 2"
                    className="w-full h-full object-cover aspect-[4/3] transform transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Floating Card */}
                <div className="absolute md:-bottom-6 md:-right-6 p-4 rounded-lg shadow-xl backdrop-blur-sm bg-white/90 transform transition-transform group-hover:translate-y-1">
                  <p className="text-sm font-monument text-primary">
                    Premium Quality
                    <br />
                    Glass Solutions
                  </p>
                </div>

                {/* Decorative Elements */}
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div
                className="space-y-2"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <h2 className="text-4xl font-bold md:text-6xl font-monument text-primary tracking-tight">
                  Choose
                </h2>
                <div className="flex items-center gap-3">
                  <h2 className="text-4xl md:text-6xl font-monument">
                    Super <span className="text-secondary">Select</span>
                  </h2>
                  <ArrowUpRight className="w-10 h-10 text-secondary animate-pulse" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-s leading-tight">
                  Let&apos; s get together and create your glass decoration in
                  your space
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Contact us for a free consultation and estimates, and we stand
                  behind our work with a comprehensive warranty.
                </p>
              </div>

              <div
                className="pt-4"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <button
                  onClick={() => route.push("/contact")}
                  className="group relative inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">Contact Us</span>
                  <span className="absolute right-4 transform translate-x-0 opacity-0 group-hover:translate-x-2 group-hover:opacity-100 transition-all duration-300">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-background to-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 relative">
            {/* Company Info */}
            <div className="group relative">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-2 transform transition-transform group-hover:rotate-0" />
              <div className="relative bg-card rounded-2xl p-8 shadow-lg h-[280px]">
                <div className="flex items-center gap-4 mb-6">
                  <Building2 className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-monument font-bold text-secondary">
                    About Company
                  </h2>
                </div>
                <p
                  className="font-sfPro text-lg text-muted-foreground leading-relaxed"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  Trusted Interior & Exterior Glass decoration firm by
                  Experienced Glass Professionals. We formed & established in
                  2006, specialized in Glass Partition and Installation for home
                  and office.
                </p>
              </div>
            </div>

            {/* Factory Info */}
            <div className="group relative">
              <div className="absolute inset-0 bg-secondary/5 rounded-3xl rotate-2 transform transition-transform group-hover:rotate-0" />
              <div className="relative bg-card rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <Factory className="w-8 h-8 text-secondary" />
                  <h2 className="text-2xl font-monument font-bold text-secondary">
                    About Factory
                  </h2>
                </div>
                <p
                  className="font-sfPro text-lg text-muted-foreground leading-relaxed"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  At our glass factory, we specialize in the production of
                  tempered glass and a variety of other glass products. Our
                  tempered glass machine is certified by ISO. In addition to
                  tempered glass, we also produce laminated glass and
                  double-glazed glass. We also offer custom services such as
                  cutting, edging, drilling, and printing to meet the specific
                  needs of our customers.
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 right-1/4 w-32 h-32 bg-secondary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
