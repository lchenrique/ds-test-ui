import { Area, TinyArea } from "@ant-design/plots";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
interface IAreaData {
  [x: string]: string | number;
  value: number;
}

interface IArea {
  date: string;
  name: string;
  value: number;
}

export interface IStatisticChartProps {
  data: IAreaData[] | IArea[];
  areaColor?: string;
  lineColor?: string | string[];
  type?: "month" | "week" | "day";
  width?: number;
  height?: number;
  title: string;
  fieldTitle?: string;
  value?: string;
  category?: string;
  areaStyle?: { fill?: string | string[]; fillOpacity?: number };
  colors: string[];
  isCurrency?: boolean;
  isTiny?: boolean;
  locale?: string;
}

function StatisticChart({
  data = [],
  lineColor,
  type = "month",
  width,
  height,
  title,
  fieldTitle,
  value,
  category,
  areaStyle,
  colors,
  isCurrency = false,
  isTiny,
  locale,
}: IStatisticChartProps) {
  const [internalData, setInternalData] = useState<any[]>([]);

  useEffect(() => {
    getData();
  }, [data?.length]);

  const getData = () => {
    if (isTiny) {
      setInternalData(data.map((v) => v.value));
      return;
    } else {
      setInternalData(
        data.map((v) => ({ ...v, date: dayjs(v?.date).format("MMMM-YYYY") })),
      );
    }
  };

  const currency = isCurrency
    ? {
        yAxis: {
          label: {
            formatter: (value: number) =>
              value.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              }),
          },
        },
        tooltip: {
          formatter: (values: any) => {
            return {
              name: fieldTitle || title,
              value: values["value" || title].toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              }),
            };
          },
        },
      }
    : {};

  const config = {
    data: internalData,
    xField: fieldTitle || "date",
    yField: value || "value",
    seriesField: category || "name",
    line: { size: [2], color: lineColor },
    width: width,
    height: height,
    color: colors?.length > 0 && colors,
    areaStyle: areaStyle,
    autoFit: true,
    smooth: true,
    xAxis: {
      tickCount: 5,

      range: [0, 1],
    },
    ...currency,
  } as any;

  return isTiny ? (
    <TinyArea {...config} style={{ height }} />
  ) : (
    <Area {...config} style={{ height }} />
  );
}

export { StatisticChart };
