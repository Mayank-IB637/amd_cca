import { selectInstanceList } from "@/redux/features/instanceList/instanceList.selector";
import { useDispatch,useSelector } from "react-redux";
import { useState } from "react";
import CustomTable from "@/components/ui/table/CustomTable";
import { useEffect } from "react";
export default function CloudInstances(){

    const [data,setData] = useSelector(selectInstanceList)
    const [instancesData,setInstancesData] = useState({})
   useEffect(() => {
  if (data?.instances) {
    const instancesArray = Array.isArray(data.instances)
      ? data.instances
      : [data.instances];
    setInstancesData(instancesArray);
  } else {
    setInstancesData([]);
  }
}, [data]);

    return <>
  <CustomTable
            data={instancesData}
            isPagination={true}
            columns={[
              { header: "UUID / Instance Name", accessorKey: "uuid" },
              { header: "Region", accessorKey: "region" },
              { header: "Size", accessorKey: "instanceType" },
              { header: "Quantity", accessorKey: "quantity" },
              { header: "No.of Hours", accessorKey: "noOfHours" },
              { header: "Pricing Model", accessorKey: "pricingModel" },
            ]}
            variant="primary"
            sx={{ height: "100%", borderRadius:0 ,p:2,pb:2,mt:2, overflowY: "auto", backgroundColor: "background.paper"}}
          />
   
    </>
}