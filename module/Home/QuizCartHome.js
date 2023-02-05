import Link from "next/link";

const QuizCartHome = ({ quizCategory }) => {
  return (
    <div className="mx-1">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {quizCategory
            .filter((fil) => fil.parent === null)
            .map((item) => {
              return (
                <Link
                  key={item.id}
                  href={`/quiz/${item.slug}`}
                  className="overflow-hidden rounded  bg-slate-900 p-6 lg:p-8"
                >
                  <h2 className=" text-xl titleText text-center font-semibold text-slate-100">
                    {item.name.slice(0, 30)}
                  </h2>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default QuizCartHome;
