import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Kanban() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Project Name</h2>
      </div>
      <div className="flex justify-center space-x-10">
        <div className="flex flex-col items-center space-y-5">
          <h1>Column 1</h1>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Task 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Task description</p>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col items-center space-y-5">
          <h1>Column 2</h1>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Task 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Task description</p>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col items-center space-y-5">
          <h1>Column 3</h1>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Task 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Task description</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
