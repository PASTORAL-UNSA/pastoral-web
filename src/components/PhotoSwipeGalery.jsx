import { useEffect } from "react";

import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipeDynamicCaption from "photoswipe-dynamic-caption-plugin";
import "photoswipe/style.css";

import images from "../data/Galery";

export default function SimpleGallery() {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallerySelector: "#gallery",
      childSelector: "a",
      pswpModule: () => import("photoswipe"),
    });

    const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
      mobileLayoutBreakpoint: 700,
      type: "auto",
      mobileCaptionOverlapRatio: 1,
    });

    lightbox.init();
  }, []);

  return (
    <div className="bg-cyan-50/10">
      <div className="mt-8 grid grid-cols-2 grid-rows-24 gap-3 md:mt-10 md:gap-4 lg:mt-12 lg:gap-5" id="gallery">
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
      <style jsx>{`
        .pswp__dynamic-caption {
          color: #fff;
          width: 100%;
          z-index: 500;
          position: absolute;
          bottom: 30px;
          padding: 10px;
        }
      `}</style>
    </div>
  );
}
