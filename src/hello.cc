#include <iostream>
#include <nan.h>
using namespace v8;

NAN_METHOD(hello) {
  int count = 0;
  for (int i = 0; i < 1000000; i++) {
    count = i;
  }

  std::cout << "hello\n";
}

NAN_MODULE_INIT(init) {
  Nan::SetMethod(target, "hello", hello);
}

NODE_MODULE(hello, init);