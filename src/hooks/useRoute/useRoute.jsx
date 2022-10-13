import React from "react";
import { useNavigate, useParams } from "react-router-dom";
export default function useRoute() {
  const navigate = useNavigate();
  const params = useParams();
  return {
    navigate,
    params,
  };
}
