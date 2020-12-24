import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import Container from "./Container"

export const Footer = () => (
  <Container>
    <div className="flex flex-wrap border-t border-white">
      <div className="w-full md:w-1/2 mt-24 md:mb-24 md:pb-24">
        <button
          className="focus:border-none focus:outline-none"
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
        >
          <div className="flex items-baseline space-x-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              viewBox="0 0 24 24"
              fill="white"
              width="48px"
              height="48px"
            >
              <rect fill="none" height="24" width="24" />
              <path d="M5,9l1.41,1.41L11,5.83V22H13V5.83l4.59,4.59L19,9l-7-7L5,9z" />
            </svg>
            <h1 className="font-axiforma underline hover:no-underline text-xl md:text-2xl lg:text-4xl">
              Back to the top
            </h1>
          </div>
        </button>
      </div>
      <div className="w-full md:w-1/2 my-24 pb-24">
        <OutboundLink
          className="mb-6 underline hover:no-underline font-axiforma text-lg md:text-2xl lg:text-4xl"
          href="mailto:juandotulung@gmail.com"
        >
          <h1 className="font-axiforma text-xl md:text-2xl lg:text-4xl">
            email 📧
          </h1>
        </OutboundLink>
        <OutboundLink
          className="mb-6 underline hover:no-underline font-axiforma text-lg md:text-2xl lg:text-4xl"
          target="_blank"
          href="https://github.com/HotPotatoC"
        >
          <h1 className="font-axiforma text-xl md:text-2xl lg:text-4xl">
            github
          </h1>
        </OutboundLink>
        <OutboundLink
          className="underline hover:no-underline font-axiforma text-lg md:text-2xl lg:text-4xl"
          target="_blank"
          href="https://www.linkedin.com/in/juan-christian-6415aa1a4/"
        >
          <h1 className="font-axiforma text-xl md:text-2xl lg:text-4xl">
            linkedin
          </h1>
        </OutboundLink>
      </div>
    </div>
  </Container>
)

export default Footer
