import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/",
  "/upcoming",
  "/previous",
  "/recordings",
  "/personal-room",
  '/meeting(.*)',
]);


export default clerkMiddleware((auth, req)=>{
  // this is to check if requests are going to the protected routes, we call the auth then the .protect 
  if(isProtectedRoute(req)) auth().protect()
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};