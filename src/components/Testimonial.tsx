export default function Example() {
  return (
    <section className="testimonial relative z-[1] py-20 lg:py-32">
      <div className="w-[calc(100%_-_2.5rem)] lg:w-[calc(100%_-_4rem)] mx-auto max-w-lg md:max-w-3xl">
        <figure className="flex justify-center mb-5 lg:mb-8 reveal-fx reveal-fx--scale">
          <img
            className="block w-24 h-24 rounded-full border-2 border-white shadow-md"
            src="https://codyhouse.co/app/assets/img/testimonial-img-1.jpg"
            alt="Testimonial picture"
          />
        </figure>

        <div className="relative mb-8 lg:mb-12">
          <blockquote className="text-2xl lg:text-3xl text-center leading-snug lg:leading-snug relative z-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            atque doloremque beatae! Doloremque perspiciatis aliquid repellat
            quasi praesentium, minima nobis assumenda ex?
          </blockquote>

          <svg
            className="absolute top-[-0.5em] left-[-0.5em] inline-block text-inherit fill-current leading-none shrink-0 w-[96px] h-[96px]  opacity-10"
            aria-hidden="true"
            viewBox="0 0 64 64"
          >
            <polygon
              fill="currentColor"
              points="2 36 17 2 26 2 15 36 26 36 26 62 2 62 2 36"
            />
            <polygon
              fill="currentColor"
              points="38 36 53 2 62 2 51 36 62 36 62 62 38 62 38 36"
            />
          </svg>
        </div>

        <div className="text-center">
          <p className="uppercase letter-spacing-md leading-tight">
            <strong>Emily Ewing</strong>
          </p>
          <p className="opacity-70 mt-0.5 lg:mt-1 leading-tight">
            Designer at CompanyX
          </p>
        </div>
      </div>
    </section>
  );
}
