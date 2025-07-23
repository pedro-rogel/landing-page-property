interface SeparatorProps {
  color?: string;
  width?: string | number;
  vertical?: boolean;
  line?: string;
  margin?: 'xs' | 'sm' | 'regular' | 'md' | 'lg' | 'xl' | boolean;
}

const Separator = ({
  color,
  width,
  vertical,
  line,
  margin,
}: SeparatorProps) => {
  const lineHeigthValue = () => {
    if (!line) return '7px';
    else
      switch (line) {
        case 'xs':
          return '3px';
        case 'sm':
          return '5px';
        case 'regular':
          return '7px';
        case 'md':
          return '9px';
        case 'lg':
          return '11px';
        case 'xl':
          return '13px';
        default:
          console.error(
            "Invalid property 'line' value, must be: 'xs', 'sm', 'regular', 'md', 'lg' or 'xl'.",
          );
          return '7px';
      }
  };

  const lineWidthValue = () => {
    if (typeof width === 'number') {
      console.error(
        "Invalid property 'width' value, the attribute must be a string",
      );
    }
    return !width ? '100%' : width;
  };

  const colorError = () => {
    return !color ? '#00dbe0' : color;
  };

  const hasMarginValue = () => {
    if (!margin) return 0;
    else
      switch (margin) {
        case 'xs':
          return '3px';
        case 'sm':
          return '5px';
        case 'regular':
          return 'auto';
        case 'md':
          return '9px';
        case 'lg':
          return '11px';
        case 'xl':
          return '13px';
        default:
          console.error(
            "Invalid property 'margin' value, must be: 'xs', 'sm', 'regular', 'md', 'lg' or 'xl'.",
          );
          return 0;
      }
  };

  return (
    <>
      <hr
        style={{
          backgroundColor: `${colorError()} `,
          width: `${!vertical ? lineWidthValue() : lineHeigthValue()}`,
          height: `${!vertical ? lineHeigthValue() : lineWidthValue()}`,
          border: 'none',
          margin : `${hasMarginValue()}`,
        }}
      />
    </>
  );
};

export default Separator;
