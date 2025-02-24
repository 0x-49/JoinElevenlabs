import React from "react";
import { Link } from "wouter";
import { Twitter, Linkedin, Youtube, Github, MessageCircle, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-6 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="block">
                <img 
                  src="https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/ElevenLabs_logo_2.png" 
                  alt="ElevenLabs Logo" 
                  className="h-8 w-auto mb-6"
                />
            </Link>
            <p className="text-gray-600 text-sm">
              ElevenLabs is a cutting-edge technology company that specializes in AI-driven audio solutions, notably text-to-speech (TTS) technologies. Founded in 2022, the company aims to make content accessible in any language and in any voice.
            </p>
          </div>

          {/* Mission */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Our Mission</h3>
            <p className="text-gray-600 text-sm">
              To become part of this innovative platform, interested individuals and businesses can visit JoinElevenLabs.com. We serve a broad range of users—from content creators needing high-quality voiceovers to businesses requiring scalable customer service solutions.
            </p>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Connect With Us</h3>
            <div className="flex flex-col space-y-2">
              <a href="https://twitter.com/elevenlabsio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-primary">
                <Twitter className="w-5 h-5" /> Twitter
              </a>
              <a href="https://www.linkedin.com/company/elevenlabsio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-primary">
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
              <a href="https://www.youtube.com/@elevenlabsio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-primary">
                <Youtube className="w-5 h-5" /> YouTube
              </a>
              <a href="https://github.com/elevenlabs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-primary">
                <Github className="w-5 h-5" /> GitHub
              </a>
              <a href="https://discord.gg/elevenlabs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-primary">
                <MessageCircle className="w-5 h-5" /> Discord
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
            <div className="flex flex-col space-y-2">
              <a href="tel:+18006145475" className="flex items-center gap-2 text-gray-600 hover:text-primary">
                <Phone className="w-5 h-5" /> (800) 614-5475
              </a>
              <a href="mailto:team@elevenlabs.io" className="flex items-center gap-2 text-gray-600 hover:text-primary">
                <Mail className="w-5 h-5" /> team@elevenlabs.io
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ElevenLabs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
