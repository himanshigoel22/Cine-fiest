import React from 'react'
import "./style.scss";

const NotFound = () => {
  return (
    <div className="NotFound">
    <ContentWrapper>
        <span className="bigText">404</span>
        <span className="smallText">Page not found!</span>
    </ContentWrapper>
</div>
  )
};

export default NotFound;
