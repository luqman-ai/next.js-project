// components/SocialMediaLinks.js
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const SocialMediaLinks = () => (
  <div className="flex items-center space-x-4">
    {/* GitHub icon */}
    <a
      href="https://github.com/luqman-ai"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-blue-500"
    >
      <FaGithub size={24} />
    </a>
    {/* Twitter icon */}
    <a
      href="https://twitter.com/luqmangujjar6"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-blue-500"
    >
      <FaTwitter size={24} />
    </a>
    {/* LinkedIn icon */}
    <a
      href="https://www.linkedin.com/in/luqman-paswal-246621287"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-blue-500"
    >
      <FaLinkedin size={24} />
    </a>
    {/* Instagram icon */}
    <a
      href="https://www.instagram.com/luqmanposwal786"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-blue-500"
    >
      <FaInstagram size={24} />
    </a>
    {/* Add more social media icons as needed */}
  </div>
);

export default SocialMediaLinks;
