/**
 * The Rating component consists in a container with 5 stars.
 * Each star is represented by a <span /> element.
 * The component should render to this HTML code:
 *
 *  <div id='rating'>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *	</div>
 *
 * When an <span /> element is clicked, the active class should be added to that <span /> and to ALL <span /> before it.
 * Also, the active class should be removed from all span elements after it, if there are any.
 * For example, after the third span element has been clicked, the HTML code should look like this:
 *
 * <div id='rating'>
 *  <span class="active">*</span>
 *  <span class="active">*</span>
 *  <span class="active">*</span>
 *  <span>*</span>
 *  <span>*</span>
 * </div>
 */

import { useState } from "react";
import "../App.css";

const arrRating = [
  { position: 0, active: false },
  { position: 1, active: false },
  { position: 2, active: false },
  { position: 3, active: false },
  { position: 4, active: false },
];

export function Rating() {
  const [rating, setRating] = useState(arrRating);

  const onHandlerRating = (position) => {
    const updatedRating = rating.map((item) => ({
      ...item,
      active: item.position <= position ? true : false,
    }));

    setRating(updatedRating);
  };

  return (
    <div id="rating">
      {rating.map((item, index) => (
        <span
          style={{
            fontSize: "70px",
            cursor: "default",
            display: "inline-block",
            width: "30px",
            marginBottom: "20px",
          }}
          key={index}
          onClick={() => onHandlerRating(item.position)}
          className={item.active ? "active" : ""}
        >
          *
        </span>
      ))}
    </div>
  );
}
