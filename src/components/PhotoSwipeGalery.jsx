import { useEffect } from "react";

import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipeDynamicCaption from "photoswipe-dynamic-caption-plugin";
import "photoswipe/style.css";
import "photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css";

import images from "../data/Galery";
import PhotoSwipeGaleryDesktop from "./PhotoSwipeGaleryDesktop";

export default function SimpleGallery() {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallerySelector: ".pswp-gallery",
      childSelector: "a",
      pswpModule: () => import("photoswipe"),
    });

    const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
      mobileLayoutBreakpoint: 700,
      type: "aside",
      mobileCaptionOverlapRatio: 1,
    });

    lightbox.init();
  }, []);

  return (
    <div className="bg-cyan-50/10">
      <div className="pswp-gallery mt-8 grid grid-cols-2 grid-rows-24 gap-3 md:mt-10 md:gap-4 lg:hidden" id="gallery-mobile">
        {images.map((elem) => (
          <a
            key={elem.url}
            href={elem.url}
            className={`min-h-52 overflow-hidden rounded-2xl bg-slate-300 shadow-[0_14px_30px_rgba(8,47,73,0.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(8,47,73,0.24)] ${elem.grid}`}
            data-pswp-width={`${elem.with}`}
            data-pswp-height={`${elem.height}`}
            target="_blank"
            rel="noreferrer"
          >
            <img alt={elem.alt} className={elem.imgClass} src={elem.url} />
            <span className="pswp-caption-content hidden">
              <b>{elem.captionTitle}</b>
              <br />
              {elem.captionText}
              <br />
            </span>
          </a>
        ))}
      </div>
      <PhotoSwipeGaleryDesktop />
      <style jsx>{`
        .pswp__dynamic-caption {
          z-index: 600;
        }

        :global(.pswp__dynamic-caption--aside) {
          top: 1.5rem;
          right: 1.5rem;
          left: auto;
          max-width: min(28vw, 22rem);
          background: rgba(7, 23, 38, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 0.875rem;
          padding: 0.85rem 1rem;
          color: #f8fbff;
        }

        :global(.pswp__dynamic-caption--aside b) {
          display: block;
          margin-bottom: 0.25rem;
          font-size: 0.95rem;
          line-height: 1.25;
          font-weight: 700;
          color: #ffffff;
        }

        :global(.pswp__dynamic-caption--mobile) {
          color: #fff;
        }
      `}</style>
    </div>
  );
}
