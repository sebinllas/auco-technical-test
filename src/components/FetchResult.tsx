import React from 'react';
import { Loading } from '@/components/Loading';
import { Error } from '@/components/Error';
import { EmptyResponse } from '@/components/EmptyResponse';

interface FetchResultProps {
	children: React.ReactNode;
	error: boolean;
	loading: boolean;
	data: any;
  renderOnError?: React.ReactNode;
  renderOnLoading?: React.ReactNode;
  renderOnEmpty?: React.ReactNode;
}

export const FetchResult = ({
	children,
	error,
	loading,
	data, 
  renderOnError = <Error />, 
  renderOnLoading = <Loading />,
  renderOnEmpty = <EmptyResponse />,
}: FetchResultProps) => {
	if (loading) return renderOnLoading;
	if (error) return renderOnError;
	if (!data) return renderOnEmpty;
  return <>{children}</>;
};
