// export default function PhotoMasonry({ images }) {
//   return (
//     <div
//       className="
//         columns-1
//         sm:columns-2
//         lg:columns-3
//         xl:columns-4
//         gap-3
//       "
//     >
//       {images.map((img, i) => (
//         <img
//           key={i}
//           src={img.src}
//           alt={img.alt}
//           loading="lazy"
//           decoding="async"
//           className="
//             w-full
//             mb-3
//             rounded-xl
//             object-cover
//             transition-transform duration-500 ease-out
//             hover:scale-[1.01]
            
//           "
//         />
//       ))}
//     </div>
//   );
// }



import { useInView } from "../../animations/useInView";

function PhotoItem({ img, index, onImageClick }) {
  const [ref, visible] = useInView();

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => onImageClick(index)}
      className={`
        group relative w-full mb-3 rounded-xl overflow-hidden break-inside-avoid
        cursor-zoom-in
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <img
        src={img.src}
        alt={img.alt}
        loading="lazy"
        decoding="async"
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-black/25" />
      <div className="pointer-events-none absolute left-3 bottom-3 text-xs uppercase tracking-[0.3em] text-white/80 font-switzer opacity-0 group-hover:opacity-100 transition duration-300">
        {img.alt}
      </div>
    </button>
  );
}

export default function PhotoMasonry({ images, onImageClick }) {
  return (
    <div className="columns-2 sm:columns-2 lg:columns-3 xl:columns-4 gap-3">
      {images.map((img, index) => (
        <PhotoItem
          key={img.src}
          img={img}
          index={index}
          onImageClick={onImageClick}
        />
      ))}
    </div>
  );
}

