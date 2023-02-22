import { Stack, Skeleton } from "@mui/material";
import React from "react";

function ServiceProviderSkeleton() {
  return (
    <div>
      <Stack spacing={1} className="w-3/12">
        <Skeleton variant="rectangular" width={350} height={250} />
      </Stack>
    </div>
  );
}

export default ServiceProviderSkeleton;
