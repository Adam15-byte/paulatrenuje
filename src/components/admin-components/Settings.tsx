import { queryClient } from '@/context/Providers';
import { Switch } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const fetchEmailSettings = async () => {
  const result = await axios.get('/api/settings/get-email-confirmation');
  return result.data;
};

const changeEmailSettings = async () => {
  const result = await axios.put(
    '/api/settings/change-email-confirmation-bool'
  );
  return result.data;
};

const Settings = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['emailSettings'],
    queryFn: () => fetchEmailSettings(),
  });
  const onValueChange = async (value: boolean) => {
    await changeEmailSettings();
    queryClient.invalidateQueries({ queryKey: ['emailSettings'] });
  };
  return (
    <Switch
      isDisabled={isLoading}
      isSelected={typeof data === 'boolean' ? data : false}
      onValueChange={onValueChange}
    >
      Wysyłaj potwierdzenie zakupu na PaulaDziubdziela.fitness@gmail.com
    </Switch>
  );
};

export default Settings;
