import React from "react";
import CenteredColumns from "components/CenteredColumns";
import "components/ContentCards.scss";

function ContentCards(props) {
  return (
    <CenteredColumns>
      {props.items.map((item, index) => (
        <div
          className="column is-half-tablet is-one-quarter-desktop"
          key={index}
        >
          <a className="ContentCards__card card is-flex" href={item.url}>
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={item.image} alt={item.title}></img>
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </CenteredColumns>
  );
}

export default ContentCards;
