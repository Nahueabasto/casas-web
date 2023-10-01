import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./Footer.css"

export default function Footer(){

    return(
        <div className="footer">
<div className="left">
            <a href="https://www.instagram.com/polleria_olivia/">
              <div className="location">
                <InstagramIcon
                  className="mui"
                  size={20}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
                <div>
                  <p></p>
                </div>
              </div>
            </a>

            <a href="https://www.instagram.com/polleria_olivia/">
            <div className="phone">
                <h4 className="h4">
                  <FacebookIcon
                    className="mui"
                    size={20}
                    style={{ color: "#fff", marginRight: "1rem" }}
                  />
                </h4>
              </div>
              </a>
              
            </div>

        </div>
    )

}