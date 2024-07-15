function ProfilePicture() {
    const imgUrl = './src/assets/Bro.jpg'
    const handleClick = (e) => e.target.style.display = "none"

    return (
        <img onClick={(e) => handleClick(e)} src={imgUrl} alt="" />
    )
}

export default ProfilePicture