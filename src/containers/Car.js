import { connect } from "react-redux";
import Car from "../components/Car"

const mapStatetoProps = (state) => {
    return {
        cars: state.cars
    };
};

export default connect(mapStatetoProps)(Car)