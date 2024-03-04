import "./style.css";
import { IoArrowDown } from "react-icons/io5";
export default function FeaturedInfo() {
  return (
    <>
      <div className="featured">
        <div className="featuredItem">
          <span className="featureTitle">Revenu</span>
          <div className="featureMoneyContainer">
            <span className="feastureMoney">$2,415</span>
            <span className="featureMoneyRate">
              -11.45 <IoArrowDown />
            </span>
          </div>
          <span className="featureSub">Compare to Last Month</span>
        </div>
        {/* ANOTHER ITEM */}
        <div className="featuredItem">
          <span className="featureTitle">Revenu</span>
          <div className="featureMoneyContainer">
            <span className="feastureMoney">$2,415</span>
            <span className="featureMoneyRate">
              -11.45 <IoArrowDown />
            </span>
          </div>
          <span className="featureSub">Compare to Last Month</span>
        </div>
        {/* ANOTHER ITEM */}
        <div className="featuredItem">
          <span className="featureTitle">Revenu</span>
          <div className="featureMoneyContainer">
            <span className="feastureMoney">$2,415</span>
            <span className="featureMoneyRate">
              -11.45 <IoArrowDown />
            </span>
          </div>
          <span className="featureSub">Compare to Last Month</span>
        </div>
      </div>
    </>
  );
}
