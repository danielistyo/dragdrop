import { useRef, useState } from "react";

const FileUploader = ({
  title = "",
  className = "",
  inputClassname = "",
  ...otherProps
}: {
  title?: string;
  className?: string;
  inputClassname?: string;
  [x: string]: unknown;
}) => {
  const [showImg, setShowImg] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const fr = new FileReader();
      fr.onload = function () {
        console.log(fr.result);
        if (imgRef.current) {
          imgRef.current.src = fr.result as string;
          setShowImg(true);
        }
      };
      fr.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <div className={className}>
      {title && <label className="block w-full mb-2 text-xs">{title}</label>}
      <input type="file" className={"text-xs " + inputClassname} {...otherProps} onChange={onChange} />
      <img ref={imgRef} className={showImg ? "block" : "hidden"} />
    </div>
  );
};

export default FileUploader;
