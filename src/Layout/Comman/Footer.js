"use client"
import React, { Component } from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      scrollBtn: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      scrollBtn: window.scrollY > 100,
    });
  };

  scrollTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div>
        <section className="bg-gray-800 text-white">
          {/* <div className="bg-gray-700 py-8">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-lg mx-auto">
                <div className="mb-6">
                  <img
                    src="/images/section-icon.png"
                    alt="section-icon"
                    className="mx-auto w-10 h-auto"
                  />
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Newsletter</h2>
                <p className="text-orange-500">Stay updated</p>
              </div>
              <div className="mt-8">
                <form action="#" className="flex flex-col items-center">
                  <div className="flex flex-col sm:flex-row w-full max-w-lg space-y-2 sm:space-y-0 sm:space-x-2">
                    <input
                      type="email"
                      className="flex-grow px-4 py-3 sm:py-3 rounded-md text-gray-800 border border-gray-300"
                      placeholder="Email address"
                    />
                    <button className="bg-orange-500 text-white px-6 py-3 rounded-md transform sm:-skew-x-16 hover:bg-yellow-500 transition-colors duration-300">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div> */}

          {/* <div className="py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">About</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">Causes</a></li>
                  <li><a href="#" className="hover:underline">About</a></li>
                  <li><a href="#" className="hover:underline">New Campaign</a></li>
                  <li><a href="#" className="hover:underline">Site Map</a></li>
                  <li><a href="#" className="hover:underline">Events</a></li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">Podcasts</a></li>
                  <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                  <li><a href="#" className="hover:underline">Videos</a></li>
                  <li><a href="#" className="hover:underline">Terms of Use</a></li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Blog</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">Care for All People</a></li>
                  <li><a href="#" className="hover:underline">Build School for Kids</a></li>
                  <li><a href="#" className="hover:underline">Being Volunteer</a></li>
                  <li><a href="#" className="hover:underline">Raise Fund to Help</a></li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Contact</h3>
                <div className="flex flex-col space-y-2">
                  <div className="flex flex-col space-y-1">
                    <span>660 Brooklyn Street, 88 New York</span>
                    <span>
                      <a href="mailto:needhelp@oxpitan.com" className="hover:underline">needhelp@oxpitan.com</a>
                    </span>
                    <span>
                      <a href="tel:6668880000" className="hover:underline">666 888 0000</a>
                    </span>
                  </div>
                  <div className="flex space-x-4 mt-4">
                    <a href="#" className="bg-blue-500 p-2 rounded-full hover:bg-blue-400 transition">
                      <TwitterIcon fontSize="small" />
                    </a>
                    <a href="#" className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition">
                      <FacebookIcon fontSize="small" />
                    </a>
                    <a href="#" className="bg-red-500 p-2 rounded-full hover:bg-red-400 transition">
                      <PinterestIcon fontSize="small" />
                    </a>
                    <a href="#" className="bg-pink-500 p-2 rounded-full hover:bg-pink-400 transition">
                      <InstagramIcon fontSize="small" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="bg-gray-900 py-4">
            <div className="container mx-auto px-4 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} by <a href="#" className="hover:underline">Layerdrops.com</a></p>
            </div>
          </div>
        </section>

        <div
          onClick={this.scrollTop}
          id="back-to-top"
          className={`fixed bottom-4 right-4 bg-[#0c4c8a] text-white p-2 rounded-full cursor-pointer transition-opacity duration-300 ${
            this.state.scrollBtn ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ArrowUpwardIcon />
        </div>
      </div>
    );
  }
}

export default Footer;
