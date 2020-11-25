import { Fragment } from "react";
import Card from "../components/card";

const CV_Template = () => {
  return (
    <Fragment>
      <section className='text-gray-700 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CV_Template;
