import React from "react"
import "./../../styles/App.scss"
import close from "./../../images/svg/close.svg"
import PropTypes from "prop-types"

class Email extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null
    }

    const textStyle = {
        marginBottom: '10px',
        width:'100%',
        borderRadius:'5px'
    }

    return (
      <div className="backdrop">
        <div className="modal">
          {this.props.children}
          <section>
            <h1>Contact Us</h1>
            <h2 style={textStyle} >Name</h2>
            <input style={textStyle} type="text" />
            <h2 style={textStyle} >Email</h2>
            <input style={textStyle} type="text" />
            <h2 style={textStyle}  >Subject</h2>
            <input style={textStyle} type="text" />
            <h2 style={textStyle} >Message</h2>
            <textarea  style={textStyle} name="name" id="name" cols="30" rows="10"></textarea>
          </section>
          <div className="footer">
            <img
              className="modalEscapeButton"
              onClick={this.props.onClose}
              style={{ height: "24px", background: "transparent" }}
              src={close}
              alt="close modal"
            />
          </div>
        </div>
      </div>
    )
  }
}

Email.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
}

export default Email
