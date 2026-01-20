import Image, { StaticImageData } from "next/image";

type SectionHeaderProps = {
  title: string;
  icon?: StaticImageData;          // الأيقونة (اختياري)
  underlineClassName?: string;     // عرض/شكل الخط الأصفر
  aos?: string;           // نوع الأنيميشن من AOS (fade-up, fade-left, ...)
  aosDelay?: number;      // تأخير الأنيميشن
  aosDuration?: number;
};

const SectionHeader = ({
  title,
  icon,
  underlineClassName,
  aos,
  aosDelay,
  aosDuration,
}: SectionHeaderProps) => {
  return (
    <div className="relative mb-10"
      data-aos={aos}
      data-aos-delay={aosDelay}
      data-aos-duration={aosDuration}>
      <div className="flex items-center gap-4">
        {icon && (
          <div className="relative w-12 h-12 md:w-16 md:h-16">
            <Image src={icon} alt={`${title} icon`} fill />
          </div>
        )}

        <h1 className="text-4xl md:text-5xl font-oswald text-white leading-tight">
          {title}
        </h1>
      </div>

      <div
        className={`h-2 bg-primaryYallow rounded mt-4 ${underlineClassName ?? "w-3/4 md:w-4/5"}`}
      />
    </div>
  );
};

export default SectionHeader;