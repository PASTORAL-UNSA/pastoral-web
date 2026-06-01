import images from "../data/Galery";

const desktopLayout = [
  "lg:col-span-7 lg:row-span-2",
  "lg:col-span-5 lg:row-span-1",
  "lg:col-span-5 lg:row-span-1",
  "lg:col-span-4 lg:row-span-1",
  "lg:col-span-4 lg:row-span-1",
  "lg:col-span-4 lg:row-span-1",
  "lg:col-span-6 lg:row-span-1",
  "lg:col-span-6 lg:row-span-1",
];

export default function PhotoSwipeGaleryDesktop() {
  return (
    <div
      className="pswp-gallery mt-12 hidden grid-cols-12 auto-rows-[13rem] gap-5 lg:grid"
      id="gallery-desktop"
    >
      {images.map((elem, index) => (
        <a
          key={`${elem.url}-desktop`}
          href={elem.url}
          className={`group overflow-hidden rounded-3xl bg-slate-300 shadow-[0_14px_30px_rgba(8,47,73,0.14)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_rgba(8,47,73,0.2)] ${desktopLayout[index % desktopLayout.length]}`}
          data-pswp-width={`${elem.with}`}
          data-pswp-height={`${elem.height}`}
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt={elem.alt}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            src={elem.url}
          />
          <span className="pswp-caption-content hidden">
            <b>{elem.captionTitle}</b>
            <br />
            {elem.captionText}
            <br />
          </span>
        </a>
      ))}
    </div>
  );
}
