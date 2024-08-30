function ColorButton(props) {
  return (
    <>
      <button
        className="p-2 h-10 w-16 rounded-md text-black font-bold border-spacing-0 border "
        style={{ backgroundColor: props.colorName }}
        onClick={() => {
          console.log("Button clicked");
          props.setColor(props.colorName);
        }}
      >
        {props.colorName}
      </button>
    </>
  );
}

export default ColorButton;
