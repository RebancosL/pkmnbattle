const PinkButton = ({
  buttonClick,
  label
}) => {
  return (
    <button 
     onClick={buttonClick}
    >
      {label}  
    </button>
  )
}

export default PinkButton;