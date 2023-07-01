import SVG from "react-inlinesvg";
import cls from "classnames";
import urlJoin from "url-join";

interface ISvgProps {
  classes?: string;
  iconname: string;
}

const SvgFile: React.FC<ISvgProps> = (props) => {
  const { iconname, classes } = props;

  // const src = `../../assets/icons/${iconname}.svg`;
  const src = urlJoin("assets/icons", `${iconname}.svg`);

  return (
    <SVG
      stroke="currentColor"
      color="currentColor"
      fill="currentColor"
      src={src}
      loader={<span>Loading...</span>}
      // cacheGetRequests
      cacheRequests={true}
      className={cls(classes)}
      {...props}
    />
  );
};

export default SvgFile;
