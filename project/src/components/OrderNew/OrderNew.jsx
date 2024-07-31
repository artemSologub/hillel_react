import { useState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import './OrderNew.css';
import useFetch from '../../hooks/use-fetch';
import schema from '../../utils/formValidator';
import formOrderPayload from '../../utils/formPayload';
import FormInput from '../FormInput/FormInput';
import { addOrder } from '../../redux/slices/ordersSlice';

const OrderNew = () => {
  const { data, error, isLoading, fetchData } = useFetch(
    'https://react-fast-pizza-api.onrender.com/api/order',
    'POST',
    null,
    false
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const cartItemsList = useSelector((state) => state.cartSate.cartItems);

  const {
    control,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      customer: '',
      phone: '',
      address: '',
      priority: false,
    },
    resolver: zodResolver(schema),
  });

  const handleFormSubmit = (formData) => {
    fetchData('POST', formOrderPayload(formData, cartItemsList));
    reset();
  };

  useEffect(() => {
    if (data && data.status === 'success') {
      dispatch(addOrder(data.data));
      navigate(`/order/new/${data.data.id}`);
    }
  }, [data, navigate]);

  useEffect(() => {
    if (error) {
      setMessage('Something went wrong. Please try again.');
    }
  }, [error]);

  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Controller
          control={control}
          name="customer"
          render={({ field, fieldState }) => (
            <FormInput
              {...field}
              error={fieldState.error}
              label={'First Name'}
            />
          )}
        />
        <Controller
          control={control}
          name="phone"
          render={({ field, fieldState }) => (
            <FormInput {...field} error={fieldState.error} label={'Phone'} />
          )}
        />
        <Controller
          control={control}
          name="address"
          render={({ field, fieldState }) => (
            <FormInput {...field} error={fieldState.error} label={'Address'} />
          )}
        />
        <Controller
          control={control}
          name="priority"
          render={({ field, fieldState }) => (
            <FormInput
              {...field}
              error={fieldState.error}
              type={'checkbox'}
              label={'Set as priority'}
            />
          )}
        />
        <button disabled={!isValid}>Order now for 'Price'</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {message && <p>{message}</p>}
    </>
  );
};

export default OrderNew;
