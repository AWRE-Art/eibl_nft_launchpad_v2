import styles from "@/styles/Redeem.module.css";
import React from "react";
import { Text } from "@chakra-ui/react";

import { FormProvider } from "../../components/context/FormContext";
import Shirt from "../../components/Shirt";

const Redeem = () => {
  function handleSubmit(event) {
    event.preventDefault();
    // if (!isChecked) {
    //   setFormError("Please select a country");
    //   return;
    // }
    // const message = formatMessage();
    // signMessage({ message });
    // setMessage(message);
    // console.log({ name, addressLine, zip, city, state, country });
  }

  return (
    <div className={styles.redeem}>
      <div className={styles.header}>
        <Text color='white' fontWeight='bold' fontSize='3xl'>
          Redeem NFT Item
        </Text>
      </div>
      <FormProvider>
        <form onSubmit={handleSubmit}>
          {/* <AddressForm /> */}
          <Shirt />
        </form>
      </FormProvider>
    </div>
  );
};

export default Redeem;
