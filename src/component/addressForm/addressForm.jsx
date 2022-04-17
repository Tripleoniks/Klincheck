import { useState } from "react";
import CustomButton from "../customButton/customButton";
import "./addressForm.scss";
import { useHistory } from "react-router-dom";
import ButtonLoader from "../buttonLoader/buttonLoader";
import { handleSumbitForm } from "../../services/usePost";
import { toast } from "react-toastify";

const AddressForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [landmark, setLandmark] = useState("");
  const [passport, setPassport] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const userData = {
    customer_id: email,
    employee_name: name,
    employee_address: address,
    city: city,
    state: state,
    bus_stop: landmark,
    image_path: passport,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await handleSumbitForm(
        "http://aledoyhost.com/klinsheet_api/api_address_veri/items/create.php",
        userData
      );
      console.log(response);
      setLoading(false);
      history.push("/");
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label>Your Email</label>
          <input
            type="email"
            class="form-control"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div class="form-group">
          <label>Employee's Name</label>
          <input
            type="text"
            class="form-control"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div class="form-group">
          <label>Employee's Address</label>
          <input
            type="text"
            class="form-control"
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="row add-row">
          <div class="form-group col-md-5">
            <label>City</label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div class="form-group col-md-5">
            <label>State</label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => setState(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row add-row">
          <div class="form-group col-md-5">
            <label>Nearest Bus Stop/Landmark</label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => setLandmark(e.target.value)}
              required
            />
          </div>
          <div class="form-group col-md-5">
            <label>Upload Passport Photograph</label>
            <input
              type="file"
              class="form-control"
              capture="user"
              accept="image/*"
              onChange={(e) => setPassport(e.target.value)}
              required
            />
          </div>
        </div>
        <CustomButton>
          {loading ? "Please Wait" : "Next"}
          {loading && <ButtonLoader />}
        </CustomButton>
      </form>
    </>
  );
};

export default AddressForm;
