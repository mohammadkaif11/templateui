interface StatsProps {
  stats: any[];
}

const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats?.length > 0 &&
            stats?.map((stat, index) => (
              <div
                key={index}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 text-gray-400">
                  {stat?.Name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  {stat?.Value}
                </dd>
              </div>
            ))}
        </dl>
      </div>
    </div>
  );
};

export default Stats;
