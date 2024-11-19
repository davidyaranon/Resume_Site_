import "./Page.css";

import TypescriptLogo from "../../../assets/typescript-logo.png";
import ReactLogo from "../../../assets/react-logo.png";
import NextJS from "../../../assets/nextjs-logo.webp";
import Tailwind from '../../../assets/tailwind.png';
import sculooLogo from "../../../assets/Sculoo.png";

import { useMyContext } from "../../../my-context";
import FadeIn from "@rcnoverwatcher/react-fade-in-react-18/src/FadeIn";

import usePageVisibility from "../../hooks/usePageVisibility";
import { handleClick } from "./Click";

const Sculoo: React.FC = () => {
  const context = useMyContext();

  const handleVisibilityChange = (isVisible: boolean) => {
    if (isVisible) {
      context.setCurrPage("sculoo");
    }
  };
  const pageRef = usePageVisibility(handleVisibilityChange);

  return (
    <>
      <FadeIn delay={1500} transitionDuration={750}>
        <div ref={pageRef} className="component-container" id="sculoo">
          <div className="content-wrapper">
            <div className="text-area">
              <h1>Sculoo</h1>
              <br />
              <p>
                SCULOO is an innovative EdTech platform designed to prepare
                students for learning through a structured, morning routine that
                promotes a daily mindset for growth. The platform aims to digitize proven
                learning processes, reducing the workload on educators while
                helping address the teacher shortage.
              </p>
              <br />
              <p className="p-title">Built With:</p>
              <div className="stack-logos">
                <ul>
                  <li>
                    <a
                      role="button"
                      href="https://react.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img alt="David Yaranon - React Logo" src={ReactLogo} />
                    </a>
                  </li>
                  <li>
                    <a
                      role="button"
                      href="https://www.typescriptlang.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        alt="David Yaranon - Typescript Logo"
                        src={TypescriptLogo}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      role="button"
                      href="https://nextjs.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        style={{ borderRadius: "7.5px" }}
                        id="next-js-logo"
                        alt="David Yaranon - NextJS Logo"
                        src={NextJS}
                      />
                    </a>
                  </li>
                  <li>
                    <a role='button' href='' target='_blank' rel="noopener noreferrer">
                      <img alt='David Yaranon - Tailwind CSS Logo' src={Tailwind} />
                    </a>
                  </li>
                </ul>
              </div>
              <br />
              <div
                style={{ display: "flex", flexDirection: "row", gap: "25px" }}
              >
                <p>
                  <a
                    className={"sculoo"}
                    href="https://holycross.sculoo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Site
                  </a>
                </p>
                {/* <p>
                  <a
                    className={"sculoo"}
                    href="https://github.com/maxlingenfelter/StudentWebApp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </p> */}
              </div>
            </div>
            <div className="image-area">
              <div className="iframe-wrapper" id="sculoo-page-iframe-wrapper">
                <img
                  style={{ borderRadius: "7.5px" }}
                  draggable={false}
                  src={sculooLogo}
                  alt="David Yaranon - Sculoo App Logo"
                />
              </div>
            </div>
          </div>
        </div>
        <br />
      </FadeIn>
      <div className="next-page-button" id="sculoo-arrow-buttons-container">
        <button
          className="sculoo-arrow-buttons"
          onClick={(e) => {
            handleClick(e, "CPHHA");
          }}
        >
          &larr; 3D Herbarium
        </button>
        <button
          className="sculoo-arrow-buttons"
          onClick={(e) => {
            handleClick(e, "tellU");
          }}
        >
          Projects &rarr;
        </button>
      </div>
    </>
  );
};

export default Sculoo;
