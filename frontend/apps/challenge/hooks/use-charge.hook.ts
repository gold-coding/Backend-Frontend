import { useCallback } from 'react';
import { gql } from '@apollo/client';
import {
  PaymentChargeInput,
  usePaymentChargeMutation,
} from '@gated/graphql-types';

gql`
  mutation PaymentCharge($input: PaymentChargeInput!) {
    paymentCharge(input: $input)
  }
`;

export const useCharge = () => {
  const [chargeMutation, { error, loading }] = usePaymentChargeMutation();

  
  return { error, loading, charge };
};
