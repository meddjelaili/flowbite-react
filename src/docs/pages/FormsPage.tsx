import { FC } from 'react';
import { HiMail } from 'react-icons/hi';

import { CodeExample, DemoPage } from './DemoPage';
import { Button, Checkbox, FileInput, Label, Radio, Select, Textarea, TextInput, ToggleSwitch } from '../../lib';

const FormsPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Form example',
      code: (
        <form className="flex flex-col gap-4">
          <div>
            <Label className="mb-2 block" htmlFor="email">
              Your email
            </Label>
            <TextInput id="email" type="email" placeholder="name@flowbite.com" required />
          </div>
          <div>
            <Label className="mb-2 block" htmlFor="password">
              Your password
            </Label>
            <TextInput id="password" type="password" required />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      ),
    },
    {
      title: 'Input Sizing',
      code: (
        <div className="flex flex-col gap-4">
          <div>
            <Label className="mb-2 block" htmlFor="small">
              Small input
            </Label>
            <TextInput id="small" type="text" sizing="sm" />
          </div>
          <div>
            <Label className="mb-2 block" htmlFor="base">
              Base input
            </Label>
            <TextInput id="base" type="text" sizing="md" />
          </div>
          <div>
            <Label className="mb-2 block" htmlFor="large">
              Large input
            </Label>
            <TextInput id="large" type="text" sizing="lg" />
          </div>
        </div>
      ),
    },
    {
      title: 'Disabled inputs',
      code: (
        <div className="flex flex-col gap-4">
          <TextInput type="text" placeholder="Disabled input" disabled />
          <TextInput type="text" placeholder="Disabled readonly input" disabled readOnly />
        </div>
      ),
    },
    {
      title: 'Shadow inputs',
      code: (
        <form className="flex flex-col gap-4">
          <div>
            <Label className="mb-2 block" htmlFor="email">
              Your email
            </Label>
            <TextInput id="email" type="email" placeholder="name@flowbite.com" required shadow />
          </div>
          <div>
            <Label className="mb-2 block" htmlFor="password">
              Your password
            </Label>
            <TextInput id="password" type="password" required shadow />
          </div>
          <div>
            <Label className="mb-2 block" htmlFor="repeat-password">
              Repeat password
            </Label>
            <TextInput id="repeat-password" type="password" required shadow />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree">
              I agree with the{' '}
              <a href="/forms" className="text-blue-600 hover:underline dark:text-blue-500">
                terms and conditions
              </a>
            </Label>
          </div>
          <Button type="submit">Register new account</Button>
        </form>
      ),
    },
    {
      title: 'Helper text',
      code: (
        <div>
          <Label className="mb-2 block" htmlFor="email">
            Your email
          </Label>
          <TextInput
            id="email"
            type="email"
            placeholder="name@flowbite.com"
            required
            helperText={
              <>
                We’ll never share your details. Read our{' '}
                <a href="/forms" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                  Privacy Policy
                </a>
                .
              </>
            }
          />
        </div>
      ),
    },
    {
      title: 'Input element with icon',
      code: (
        <div>
          <Label className="mb-2 block" htmlFor="email">
            Your email
          </Label>
          <TextInput id="email" type="email" placeholder="name@flowbite.com" required icon={HiMail} />
        </div>
      ),
    },
    {
      title: 'Input element with addon',
      code: (
        <div>
          <Label className="mb-2 block" htmlFor="username">
            Username
          </Label>
          <TextInput id="username" placeholder="Bonnie Green" required addon="@" />
        </div>
      ),
    },
    {
      title: 'Success and error validation',
      code: (
        <div className="flex flex-col gap-4">
          <div>
            <Label className="mb-2 block" htmlFor="username" color="green">
              Your name
            </Label>
            <TextInput
              id="username"
              placeholder="Bonnie Green"
              required
              color="green"
              helperText={
                <>
                  <span className="font-medium">Alright!</span> Username available!
                </>
              }
            />
          </div>
          <div>
            <Label className="mb-2 block" htmlFor="username" color="red">
              Your name
            </Label>
            <TextInput
              id="username"
              placeholder="Bonnie Green"
              required
              color="red"
              helperText={
                <>
                  <span className="font-medium">Oops!</span> Username already taken!
                </>
              }
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Textarea',
      code: (
        <div id="textarea">
          <Label className="mb-2 block" htmlFor="comment">
            Your message
          </Label>
          <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
        </div>
      ),
    },
    {
      title: 'Select input',
      code: (
        <div id="select">
          <Label className="mb-2 block" htmlFor="countries">
            Select your country
          </Label>
          <Select id="countries" required>
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </Select>
        </div>
      ),
    },
    {
      title: 'Checkbox',
      code: (
        <div className="flex flex-col gap-4" id="checkbox">
          <div className="flex items-center gap-2">
            <Checkbox id="accept" defaultChecked />
            <Label htmlFor="accept">
              I agree to the{' '}
              <a href="/forms" className="text-blue-600 hover:underline dark:text-blue-500">
                terms and conditions
              </a>
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="promotion" />
            <Label htmlFor="promotion">I want to get promotional offers</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="age" />
            <Label htmlFor="age">I am 18 years or older</Label>
          </div>
          <div className="flex gap-2">
            <div className="flex h-5 items-center">
              <Checkbox id="shipping" />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="shipping">Free shipping via Flowbite</Label>
              <div className="text-gray-500 dark:text-gray-300">
                <span className="text-xs font-normal">
                  For orders shipped from Flowbite from <span className="font-medium">€ 25</span> in books or{' '}
                  <span>€ 29</span> on other categories
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="disabled" disabled />
            <Label htmlFor="disabled" className="opacity-50">
              Eligible for international shipping (disabled)
            </Label>
          </div>
        </div>
      ),
    },
    {
      title: 'Radio',
      code: (
        <fieldset className="flex flex-col gap-4" id="radio">
          <div className="flex items-center gap-2">
            <Radio id="united-state" name="countries" value="USA" defaultChecked />
            <Label htmlFor="united-state">United States</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio id="germany" name="countries" value="Germany" />
            <Label htmlFor="germany">Germany</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio id="spain" name="countries" value="Spain" />
            <Label htmlFor="spain">Spain</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio id="uk" name="countries" value="United Kingdom" />
            <Label htmlFor="uk">United Kingdom</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio id="china" name="countries" value="China" disabled />
            <Label className="opacity-50" htmlFor="china">
              China (disabled)
            </Label>
          </div>
        </fieldset>
      ),
    },
    {
      title: 'File upload',
      code: (
        <div id="fileUpload">
          <Label className="mb-2 block" htmlFor="file">
            Upload file
          </Label>
          <FileInput id="file" helperText="A profile picture is useful to confirm your are logged into your account" />
        </div>
      ),
    },
    {
      title: 'Toggle Switch',
      code: (
        <div className="flex flex-col gap-4" id="toggle">
          <ToggleSwitch label="Toggle me" />
          <ToggleSwitch label="Toggle me (checked)" defaultChecked />
          <ToggleSwitch label="Toggle me (disabled)" disabled />
        </div>
      ),
    },
  ];

  return <DemoPage examples={examples} />;
};

export default FormsPage;
