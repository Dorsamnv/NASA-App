export default function SideBar(props){
  const {handleToggleModal, data} = props 
    return(
        <div className="sidebar">
            <div onClick={handleToggleModal} className="bg0verlay"></div>
            <div className="sidebarContents">
          <h2>{data?.title}</h2>
          <div className="descrioptionContainer">
            <p className="descriptionTitle">{data?.date}</p>
            <p>{data?.explanation}</p>
          </div>
          <button onClick={handleToggleModal}>
             <i className="fa-solid fa-right-long"></i>
          </button>
        </div>
        </div>
    )
}