# abort on errors 
set -e 

# build 
echo Linting.. 
npm run lint 
echo Building. this may take a minute... 
npm run build 
cp -r dist docs && sed -i -e 's/src=\\//src=/g' docs/index.html ; sed -i -e 's/href=\\//href=/g' docs/index.html

# if you are deploying to a custom domain add a CNAME (uncomment the next 3 lines) 
#cd docs 
#echo 'yourcustomdomain.com' > CNAME 
#cd - 

# deploy 
echo Deploying.. 
git add -A 
git commit -m 'deploy' 
git push -f https://github.com/MikaGurrola/countries-api.git master