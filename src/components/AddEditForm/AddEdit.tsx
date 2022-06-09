import { SyntheticEvent, useState } from "react";
import {
  apiResponseActionCreator,
  cleanApiResponseActionCreator,
} from "../../redux/features/uiSlice";
import { createArtworkThunk } from "../../redux/thunks/artworkThunks";
import { useAppDispatch, useAppSelector } from "../hooks";
import LoadingModal from "../LoadingModal/LoadingModal";
import ModalText from "../ModalText/ModalText";
import AddEditFormStyled from "./AddEditFormStyled";

const AddEditForm = (): JSX.Element => {
  const formInitialState = {
    title: "",
    medium: "",
    height: "",
    width: "",
    style: "",
    purchaseprice: "",
    monthlyrateprice: "",
    description: "",
    artimages: "",
  };

  const [formData, setFormData] = useState(formInitialState);
  const apiMessage = useAppSelector((state) => state.ui.apiResponse);
  const loading = useAppSelector((state) => state.ui.loading);
  const feedback = useAppSelector((state) => state.ui.feedback);

  const dispatch = useAppDispatch();

  const changeData = (event: SyntheticEvent) => {
    setFormData({
      ...formData,
      [(event.target as HTMLInputElement).id]:
        (event.target as HTMLInputElement).type === "file"
          ? (event.target as HTMLInputElement).files?.[0] || ""
          : (event.target as HTMLInputElement).value,
    });
  };

  const resetForm = () => {
    setFormData(formInitialState);
  };

  const submitCreate = (event: SyntheticEvent) => {
    event.preventDefault();

    if (
      formData.title === "" ||
      formData.medium === "" ||
      formData.height === "" ||
      formData.width === "" ||
      formData.purchaseprice === "" ||
      formData.description === ""
    ) {
      dispatch(apiResponseActionCreator("Blank"));
      return;
    }

    const newArtwork = new FormData();
    newArtwork.append("title", formData.title.toLowerCase());
    newArtwork.append("medium", formData.medium.toLowerCase());
    newArtwork.append("height", formData.height);
    newArtwork.append("width", formData.width);
    newArtwork.append("style", formData.style.toLowerCase());
    newArtwork.append("purchaseprice", formData.purchaseprice.toLowerCase());
    newArtwork.append(
      "monthlyrateprice",
      formData.monthlyrateprice.toLowerCase()
    );
    newArtwork.append("description", formData.description);
    newArtwork.append("artimages", formData.artimages);

    dispatch(createArtworkThunk(newArtwork));
    setFormData(formInitialState);
    resetForm();
  };

  const submitClosingModalResponse = () => {
    dispatch(cleanApiResponseActionCreator());
  };

  return (
    <>
      {apiMessage === "Blank" && (
        <ModalText
          handleClose={submitClosingModalResponse}
          isOpen={feedback}
          customFunction={""}
        >
          Please, you left one or more mandatory fields in blank
        </ModalText>
      )}
      {apiMessage === "new" && (
        <ModalText
          handleClose={submitClosingModalResponse}
          isOpen={feedback}
          customFunction={""}
        >
          Your Artwork was Created Succesfully! You will be redirected to your
          Art page
        </ModalText>
      )}
      {apiMessage === "Conflict" && (
        <ModalText
          handleClose={submitClosingModalResponse}
          isOpen={feedback}
          customFunction={""}
        >
          This email is already in use, please, choose another email
        </ModalText>
      )}
      {loading ? (
        <LoadingModal />
      ) : (
        <AddEditFormStyled>
          <div>
            <div className="addedit__form">
              <form onSubmit={submitCreate} noValidate autoComplete="off">
                <div className="addedit__text--container">
                  <p className="addedit__text--intro">ADD YOUR WORK</p>
                  <p className="addedit__text--intro">TO START SELLING AND </p>
                  <p className="addedit__text--intro">
                    RENTING
                    <span className="addedit__text--colored"> RIGHT NOW!</span>
                  </p>
                </div>
                <div className="addedit__form--container-labels">
                  <div className="addedit__form--first-labels">
                    <label className="addedit__label" htmlFor="title">
                      TITLE
                    </label>
                    <input
                      className="addedit__input"
                      id="title"
                      placeholder="TITLE"
                      value={formData.title}
                      onChange={changeData}
                      required
                      autoComplete="off"
                    />
                    <label className="addedit__label" htmlFor="medium">
                      MEDIUM
                    </label>
                    <input
                      className="addedit__input"
                      id="medium"
                      placeholder="MEDIUM"
                      value={formData.medium}
                      onChange={changeData}
                      required
                      autoComplete="off"
                    />
                    <label className="addedit__label" htmlFor="height">
                      HEIGHT (DIMENSIONS)
                    </label>
                    <input
                      className="addedit__input"
                      id="height"
                      type="height"
                      placeholder="HEIGHT"
                      value={formData.height}
                      onChange={changeData}
                      required
                      autoComplete="off"
                    />
                    <label className="addedit__label" htmlFor="width">
                      WIDTH (DIMENSIONS)
                    </label>
                    <input
                      className="addedit__input"
                      id="width"
                      type="width"
                      placeholder="WIDTH"
                      value={formData.width}
                      onChange={changeData}
                      required
                      autoComplete="off"
                    />
                    <label className="addedit__label" htmlFor="style">
                      STYLE
                    </label>
                    <select
                      id="style"
                      className="addedit__select"
                      name="style"
                      value={formData.style}
                      onChange={changeData}
                    >
                      <option disabled value="">
                        Select a Style
                      </option>
                      <option value="abstract">Abstract</option>
                      <option value="architecture">Architecture</option>
                      <option value="expressionist">Expressionist</option>
                      <option value="figurative">Figurative</option>
                      <option value="geometric">Geometric</option>
                      <option value="minimal">Minimal</option>
                      <option value="nature">Nature</option>
                      <option value="people">People</option>
                      <option value="psychedelic">Psychedelic</option>
                      <option value="urban">Urban</option>
                    </select>
                  </div>
                  <div className="addedit__form--second-labels">
                    <label className="addedit__label" htmlFor="purchaseprice">
                      PURCHASE PRICE
                    </label>
                    <input
                      className="addedit__input"
                      id="purchaseprice"
                      placeholder="€"
                      value={formData.purchaseprice}
                      required
                      onChange={changeData}
                      autoComplete="off"
                    />
                    <label
                      className="addedit__label"
                      htmlFor="monthlyrateprice"
                    >
                      MONTHLY RATE PRICE
                    </label>
                    <input
                      className="addedit__input"
                      id="monthlyrateprice"
                      placeholder="€"
                      value={formData.monthlyrateprice}
                      onChange={changeData}
                      autoComplete="off"
                    />
                    <label className="addedit__label" htmlFor="description">
                      DESCRIPTION (MAX 240 CHAR)
                    </label>
                    <textarea
                      maxLength={240}
                      className="addedit__textarea"
                      id="description"
                      placeholder="Describe your Artwork here"
                      value={formData.description}
                      onChange={changeData}
                      autoComplete="off"
                    />
                    <label className="addedit__label" htmlFor="artimages">
                      ARTWORK PICTURE
                    </label>
                    <input
                      className="addedit__input"
                      id="artimages"
                      type="file"
                      onChange={changeData}
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="addedit__button--container">
                  <button
                    className="addedit__button"
                    type="submit"
                    disabled={false}
                    value="Send"
                  >
                    ADD YOUR ART
                  </button>
                </div>
              </form>
            </div>
          </div>
        </AddEditFormStyled>
      )}
    </>
  );
};

export default AddEditForm;
