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
      <div className="grid grid-cols-2 grid-rows-24 gap-4 mt-8" id="gallery">
        {images.map((elem) => (
          <a
            key={elem.url}
            href={elem.url}
            className={`bg-slate-300  overflow-hidden rounded-lg shadow-lg min-h-52 ${elem.grid}`}
            data-pswp-width={`${elem.with}`}
            data-pswp-height={`${elem.height}`}
            target="_blank"
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
