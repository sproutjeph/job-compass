import CircleChart from "@/components/charts/CircleChart";

export default function Page() {
  return (
    <main>
      <CircleChart
        colors={[]}
        labels={["Pending", "Interviwed"]}
        series={[1, 2, 3, 4]}
      />
    </main>
  );
}
