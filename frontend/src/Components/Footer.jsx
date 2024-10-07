import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="bg-[#0244F1] h-72 text-[#FFFFFF] px-8 bg-footer-bg bg-cover bg-center"
      style={{
        backgroundImage:
          "url('C:UsersCHIDI METUDesktopBasedEdu\frontendsrcassets\footer-bg.jpeg')",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className='grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${
            
               border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]"
    '
        >
          {/* 1st block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div></div>
            <div className="text-sm ">Educate Be part of this journey</div>
          </div>

          {/* 2nd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="transition hover:text-gray-900" href="#0">
                  Features
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-gray-900" href="#0">
                  Integrations
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-gray-900" href="#0">
                  Pricing & Plans
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-gray-900" href="#0">
                  Changelog
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-gray-900" href="#0">
                  Our method
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="transition hover:text-gray-900" href="#0">
                  About us
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-gray-900" href="#0">
                  Diversity & Inclusion
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-gray-900" href="#0">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-gray-900" href="#0">
                  Careers
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-gray-900" href="#0">
                  Financial statements
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="transition hover:text-gray-900" href="#0">
                  Community
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-gray-900" href="#0">
                  Terms of service
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-gray-900" href="#0">
                  Report a vulnerability
                </Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
        </div>
      </div>
      <div className="flex justify-between">
        <div>&copy; educate 2024.All rights reserved.</div>
        <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
          <ul className="flex gap-1">
            <li>
              <Link
                className="flex items-center justify-center text-[#FFFFFF] transition hover:text-blue-600"
                href="#0"
                aria-label="Twitter"
              >
                <svg
                  className="h-8 w-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"></path>
                </svg>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center justify-center text-[#FFFFFF] transition hover:text-blue-600"
                href="#0"
                aria-label="Facebook"
              >
                <svg
                  className="h-8 w-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M 5 3 C 3.897 3 3 3.897 3 5 L 3 19 C 3 20.103 3.897 21 5 21 L 11.621094 21 L 14.414062 21 L 19 21 C 20.103 21 21 20.103 21 19 L 21 5 C 21 3.897 20.103 3 19 3 L 5 3 z M 5 5 L 19 5 L 19.001953 19 L 14.414062 19 L 14.414062 15.035156 L 16.779297 15.035156 L 17.130859 12.310547 L 14.429688 12.310547 L 14.429688 10.574219 C 14.429687 9.7862188 14.649297 9.2539062 15.779297 9.2539062 L 17.207031 9.2539062 L 17.207031 6.8222656 C 16.512031 6.7512656 15.814234 6.71675 15.115234 6.71875 C 13.041234 6.71875 11.621094 7.9845938 11.621094 10.308594 L 11.621094 12.314453 L 9.2773438 12.314453 L 9.2773438 15.039062 L 11.621094 15.039062 L 11.621094 19 L 5 19 L 5 5 z"></path>
                </svg>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center justify-center text-[#FFFFFF] transition hover:text-blue-600"
                href="#0"
                aria-label="Linkedin"
              >
                <svg
                  className="h-8 w-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M 5 3 C 3.9 3 3 3.9 3 5 L 3 19 C 3 20.1 3.9 21 5 21 L 19 21 C 20.1 21 21 20.1 21 19 L 21 5 C 21 3.9 20.1 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 7.8007812 6.3007812 C 6.9007812 6.3007812 6.4003906 6.8 6.4003906 7.5 C 6.4003906 8.2 6.8992188 8.6992188 7.6992188 8.6992188 C 8.5992187 8.6992187 9.0996094 8.2 9.0996094 7.5 C 9.0996094 6.8 8.6007813 6.3007812 7.8007812 6.3007812 z M 6.5 10 L 6.5 17 L 9 17 L 9 10 L 6.5 10 z M 11.099609 10 L 11.099609 17 L 13.599609 17 L 13.599609 13.199219 C 13.599609 12.099219 14.499219 11.900391 14.699219 11.900391 C 14.899219 11.900391 15.599609 12.099219 15.599609 13.199219 L 15.599609 17 L 18 17 L 18 13.199219 C 18 10.999219 17.000781 10 15.800781 10 C 14.600781 10 13.899609 10.4 13.599609 11 L 13.599609 10 L 11.099609 10 z"></path>
                </svg>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center justify-center text-[#FFFFFF] transition hover:text-blue-600"
                href="#0"
                aria-label="Facebook"
              >
                <svg
                  className="h-8 w-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m2.151 12.013c-1.385.417-2.115 1.688-2.115 2.961 0 3.474 4.5 4.212 5.891 1.351v4.56c0 3.755 5.17 4.077 6.078.976.953 3.174 6.073 2.722 6.073-.978 0-1.232-.725-2.29-1.766-2.794h4.575c3.774 0 4.083-5.221.935-6.095 3.276-1.062 2.73-6.062-.957-6.062-1.214 0-2.279.629-2.787 1.684v-4.501c0-3.755-5.167-4.077-6.077-.978-.961-3.213-6.076-2.723-6.076.978 0 1.246.74 2.316 1.8 2.813h-4.608c-3.761 0-4.08 5.185-.966 6.085zm2.597 2.961c0 2.068-3.212 2.239-3.212.001 0-.899.568-1.617 1.599-1.617h1.613zm1.5-1.425c-.046-.838.105-1.074-.166-1.389h1.72c-.657.251-1.221.714-1.554 1.389zm4.405 7.336c0 2.133-3.227 2.136-3.227 0v-5.911c0-2.127 3.227-2.128 3.227 0zm1.5-2.95v-1.626c.264.617.717 1.145 1.369 1.462-.8.043-1.052-.107-1.369.164zm1.198 2.95v-1.615c.436.098 3.227-.544 3.227 1.613-.001 2.13-3.226 2.123-3.227.002zm7.536-4.296h-5.923c-2.129 0-2.129-3.231 0-3.231h5.923c2.135 0 2.138 3.231 0 3.231zm-.023-9.156c2.243 0 2.073 3.227.005 3.227h-1.613c.135-.616-.591-3.227 1.608-3.227zm-3.108 3.055c.043.804-.102 1.02.16 1.37h-1.632c.621-.262 1.153-.716 1.472-1.37zm-4.405-7.373c0-2.133 3.227-2.136 3.227 0v5.929c0 2.134-3.227 2.134-3.227 0zm.68 8.879c-1.081.3-1.754 1.104-2.018 2.045-.31-1.084-1.145-1.748-2.11-1.994 1.12-.282 1.814-1.102 2.086-2.06.302 1.077 1.104 1.746 2.042 2.009zm-2.18-5.928v1.644c-.268-.627-.73-1.165-1.399-1.48.846-.045 1.045.107 1.399-.164zm-1.198-2.956v1.62c-.434-.097-3.229.546-3.229-1.615.001-2.12 3.229-2.188 3.229-.005zm-7.536 4.318h5.923c2.135 0 2.138 3.231 0 3.231h-5.923c-2.135 0-2.138-3.231 0-3.231z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center justify-center text-[#FFFFFF] transition hover:text-blue-600"
                href="#0"
                aria-label="Github"
              >
                <svg
                  className="h-8 w-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4.1 0-.9.3-1.7.8-2.3-.1-.2-.4-1.1.1-2.3 0 0 .7-.2 2.4.9.7-.2 1.4-.3 2.1-.3.7 0 1.4.1 2.1.3 1.7-1.1 2.4-.9 2.4-.9.5 1.2.2 2.1.1 2.3.5.6.8 1.4.8 2.3 0 3.2-1.9 3.9-3.6 4.1.3.3.6.8.6 1.5v2.2c0 .3.1.5.5.4 3.2-1 5.5-4 5.5-7.6 0-4.4-3.6-8-8-8Z"></path>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
