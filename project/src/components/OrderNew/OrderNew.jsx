import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import './OrderNew.css';
import FormInput from '../FormInput/FormInput';

const schema = z.object({
  firstName: z.string().min('2'),
  phone: z.string().min('7'),
  address: z.string().min('9'),
  priority: z.boolean(),
});

const OrderNew = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      firstName: '',
      phone: '',
      address: '',
      priority: false,
    },
    resolver: zodResolver(schema),
  });

  const handleFormSubmit = (data) => {
    console.log('Form Data', data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Controller
        control={control}
        name="firstName"
        render={({ field, fieldState }) => (
          <FormInput {...field} error={fieldState.error} label={'First Name'} />
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
  );
};

export default OrderNew;
